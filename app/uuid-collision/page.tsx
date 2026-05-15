"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";

const MIN_LEN = 4;
const MAX_LEN = 12;
const BATCH_PER_FRAME = 4000;

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] as [number, number, number, number] },
  },
};

type Collision = {
  id: number;
  value: string;
  firstSeenAt: number;
  collidedAt: number;
};

function truncateUUID(uuid: string, len: number): string {
  let out = "";
  for (let i = 0; i < uuid.length && out.length < len; i++) {
    const c = uuid[i];
    if (c !== "-") out += c;
  }
  return out;
}

function formatTruncatedForDisplay(s: string): string {
  // Insert dashes mimicking UUID format: 8-4-4-4-12
  const parts: string[] = [];
  const cuts = [8, 12, 16, 20, 32];
  let start = 0;
  for (const c of cuts) {
    if (s.length <= start) break;
    parts.push(s.slice(start, Math.min(c, s.length)));
    start = c;
  }
  return parts.join("-");
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

function expected50Percent(hexLen: number): number {
  // 1.1774 * sqrt(D) where D = 2^(4*hexLen)
  return 1.1774 * Math.pow(2, (4 * hexLen) / 2);
}

function collisionProbability(N: number, hexLen: number): number {
  // P ≈ 1 - exp(-N*(N-1)/(2*D))
  if (N < 2) return 0;
  const D = Math.pow(2, 4 * hexLen);
  const exponent = -(N * (N - 1)) / (2 * D);
  // -expm1(x) = 1 - exp(x); we want 1 - exp(exponent)
  return -Math.expm1(exponent);
}

function formatProbability(p: number): string {
  if (p >= 0.9999) return ">99.99%";
  if (p < 0.0001 && p > 0) return "<0.01%";
  return (p * 100).toFixed(2) + "%";
}

export default function UUIDCollisionPage() {
  const [hexLen, setHexLen] = useState(6);
  const [running, setRunning] = useState(false);
  const [count, setCount] = useState(0);
  const [latest, setLatest] = useState("");
  const [latestTruncated, setLatestTruncated] = useState("");
  const [speed, setSpeed] = useState(0);
  const [collisions, setCollisions] = useState<Collision[]>([]);
  const [flash, setFlash] = useState(0);

  const seenRef = useRef<Map<string, number>>(new Map());
  const countRef = useRef(0);
  const collisionIdRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const speedSampleRef = useRef<{ t: number; n: number }>({ t: 0, n: 0 });
  const stoppedRef = useRef(false);

  const reset = useCallback(() => {
    seenRef.current = new Map();
    countRef.current = 0;
    collisionIdRef.current = 0;
    setCount(0);
    setLatest("");
    setLatestTruncated("");
    setSpeed(0);
    setCollisions([]);
    setFlash(0);
    speedSampleRef.current = { t: 0, n: 0 };
  }, []);

  // Reset when hex length changes
  useEffect(() => {
    setRunning(false);
    reset();
  }, [hexLen, reset]);

  useEffect(() => {
    if (!running) return;
    stoppedRef.current = false;

    const tick = () => {
      if (stoppedRef.current) return;

      const newCollisions: Collision[] = [];
      let lastUuid = "";
      let lastTrunc = "";
      const seen = seenRef.current;

      for (let i = 0; i < BATCH_PER_FRAME; i++) {
        const uuid = crypto.randomUUID();
        const trunc = truncateUUID(uuid, hexLen);
        countRef.current++;

        const prev = seen.get(trunc);
        if (prev !== undefined) {
          newCollisions.push({
            id: ++collisionIdRef.current,
            value: trunc,
            firstSeenAt: prev,
            collidedAt: countRef.current,
          });
        } else {
          seen.set(trunc, countRef.current);
        }
        lastUuid = uuid;
        lastTrunc = trunc;
      }

      setCount(countRef.current);
      setLatest(lastUuid);
      setLatestTruncated(lastTrunc);

      // Speed sample
      const now = performance.now();
      const sample = speedSampleRef.current;
      if (sample.t === 0) {
        speedSampleRef.current = { t: now, n: countRef.current };
      } else if (now - sample.t > 250) {
        const dt = (now - sample.t) / 1000;
        const dn = countRef.current - sample.n;
        setSpeed(Math.round(dn / dt));
        speedSampleRef.current = { t: now, n: countRef.current };
      }

      if (newCollisions.length > 0) {
        setCollisions((prev) => [...newCollisions.reverse(), ...prev].slice(0, 100));
        setFlash((f) => f + 1);
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      stoppedRef.current = true;
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [running, hexLen]);

  // Cancel flash after a moment so background animation can replay
  useEffect(() => {
    if (flash === 0) return;
    const id = window.setTimeout(() => setFlash(0), 250);
    return () => window.clearTimeout(id);
  }, [flash]);

  const bits = 4 * hexLen;
  const space = useMemo(() => {
    // 2^bits — for bits <= 48 keep integer; otherwise scientific
    if (bits <= 48) return formatNumber(Math.pow(2, bits));
    return Math.pow(2, bits).toExponential(2);
  }, [bits]);
  const expected50 = expected50Percent(hexLen);
  const prob = collisionProbability(count, hexLen);

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="col-span-full"
    >
      <motion.div variants={item} className="mb-12 md:mb-16">
        <h1 className="text-[12vw] md:text-[10vw] leading-[0.85] font-black tracking-tighter uppercase break-all">
          UUID
          <br />
          COLLISION
        </h1>
        <div className="mt-8 grid grid-cols-4 md:grid-cols-12 gap-6">
          <div className="col-span-4 md:col-span-7 md:col-start-6">
            <p className="text-lg md:text-xl leading-tight font-medium text-secondary font-[family-name:var(--font-zen-kaku)]">
              UUID v4は122ビットのランダム性を持ち、衝突は実質的にありえません。
              そこで先頭の<span className="text-accent font-bold">N桁だけ</span>を比較対象にすることで、誕生日のパラドックスの恐ろしさを体感できます。
            </p>
          </div>
        </div>
      </motion.div>

      {/* Controls */}
      <motion.div variants={item} className="mb-12 hard-border-b pb-10">
        <div className="grid grid-cols-4 md:grid-cols-12 gap-y-8 md:gap-x-6">
          <div className="col-span-4 md:col-span-6">
            <label htmlFor="hex-len" className="font-mono text-sm uppercase text-accent mb-3 block">
              Compare first {hexLen} hex chars · {bits} bits · space = {space}
            </label>
            <input
              id="hex-len"
              type="range"
              min={MIN_LEN}
              max={MAX_LEN}
              value={hexLen}
              onChange={(e) => setHexLen(Number(e.target.value))}
              className="w-full accent-[var(--accent)]"
            />
            <div className="mt-2 flex justify-between font-mono text-xs text-secondary">
              <span>{MIN_LEN}</span>
              <span>{MAX_LEN}</span>
            </div>
          </div>

          <div className="col-span-4 md:col-span-6 flex flex-col md:flex-row gap-4 md:items-end md:justify-end">
            <button
              type="button"
              onClick={() => setRunning((r) => !r)}
              className={`px-8 py-4 hard-border font-bold uppercase transition-colors ${
                running
                  ? "bg-accent text-white"
                  : "bg-primary text-secondary hover:bg-secondary hover:text-primary"
              }`}
            >
              {running ? "Pause" : count === 0 ? "Start" : "Resume"}
            </button>
            <button
              type="button"
              onClick={() => {
                setRunning(false);
                reset();
              }}
              className="px-8 py-4 hard-border bg-primary text-secondary font-bold uppercase hover:bg-secondary hover:text-primary transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </motion.div>

      {/* Live stats */}
      <motion.div variants={item} className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-fg-primary hard-border">
          <StatCell label="Generated" value={formatNumber(count)} mono />
          <StatCell label="Speed" value={`${formatNumber(speed)}/s`} mono />
          <StatCell label="50% at" value={formatNumber(Math.round(expected50))} mono />
          <StatCell label="P(collision)" value={formatProbability(prob)} mono accent />
        </div>
      </motion.div>

      {/* Latest UUID */}
      <motion.div variants={item} className="mb-16">
        <div className="font-mono text-sm uppercase text-accent mb-3">Latest UUID</div>
        <div
          key={flash /* re-mount for flash animation */}
          className={`hard-border p-6 md:p-8 ${
            flash > 0 ? "bg-accent text-white" : "bg-secondary"
          } transition-colors`}
        >
          <div className="font-mono text-xs md:text-sm break-all text-secondary mb-2">
            <span className={flash > 0 ? "text-white/70" : "text-secondary"}>full:</span>{" "}
            {latest || "—"}
          </div>
          <div className="font-mono text-lg md:text-2xl font-bold break-all">
            <span className={`${flash > 0 ? "text-white/70" : "text-accent"} text-sm md:text-base mr-2`}>
              first {hexLen}:
            </span>
            {formatTruncatedForDisplay(latestTruncated) || "—"}
          </div>
        </div>
      </motion.div>

      {/* Collision log */}
      <motion.div variants={item}>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 border-b-2 border-secondary pb-4">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter">
            Collisions
          </h2>
          <div className="font-mono text-sm uppercase mt-3 md:mt-0">
            <span className="text-secondary">total · </span>
            <span className="text-accent font-bold">{formatNumber(collisions.length)}</span>
            {collisions.length === 100 && (
              <span className="text-secondary"> (showing latest 100)</span>
            )}
          </div>
        </div>

        {collisions.length === 0 ? (
          <p className="font-mono text-sm uppercase text-secondary py-12 text-center hard-border">
            no collisions yet · press start
          </p>
        ) : (
          <ul className="flex flex-col gap-px bg-fg-primary hard-border">
            {collisions.map((c) => (
              <li
                key={c.id}
                className="bg-primary p-4 md:p-5 grid grid-cols-4 md:grid-cols-12 gap-2 md:gap-4 items-baseline"
              >
                <div className="col-span-1 md:col-span-1 font-mono text-xs uppercase text-accent">
                  #{c.id}
                </div>
                <div className="col-span-3 md:col-span-5 font-mono text-sm md:text-base font-bold break-all">
                  {formatTruncatedForDisplay(c.value)}
                </div>
                <div className="col-span-4 md:col-span-6 font-mono text-xs md:text-sm text-secondary">
                  first seen at #{formatNumber(c.firstSeenAt)} · collided at #
                  {formatNumber(c.collidedAt)} · Δ {formatNumber(c.collidedAt - c.firstSeenAt)}
                </div>
              </li>
            ))}
          </ul>
        )}
      </motion.div>

      {/* Notes */}
      <motion.div variants={item} className="mt-16 grid grid-cols-4 md:grid-cols-12 gap-6">
        <div className="col-span-4 md:col-span-8 md:col-start-3">
          <p className="font-mono text-xs uppercase text-secondary leading-relaxed">
            generation uses <span className="text-accent">crypto.randomUUID()</span>, truncated to the
            chosen prefix length. P(collision) follows the birthday approximation 1 − exp(−N(N−1)/2D)
            where D = 2^(4·N_hex).
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}

function StatCell({
  label,
  value,
  mono,
  accent,
}: {
  label: string;
  value: string;
  mono?: boolean;
  accent?: boolean;
}) {
  return (
    <div className="bg-primary p-5 md:p-6">
      <div className="font-mono text-xs uppercase text-accent mb-2">{label}</div>
      <div
        className={`${mono ? "font-mono" : ""} text-xl md:text-3xl font-bold tracking-tight break-all ${
          accent ? "text-accent" : ""
        }`}
      >
        {value}
      </div>
    </div>
  );
}
