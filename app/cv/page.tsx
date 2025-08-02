import Link from 'next/link'

export default function CVPage() {
  return (
    <section className="max-w-4xl">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Curriculum Vitae</h1>
      
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-medium">基本情報</h2>
        <p className="mb-2">中山大地 (Nakayama Daichi)</p>
        <p className="mb-2">Software Engineer at <Link href="https://legalscape.jp" className="underline hover:no-underline">Legalscape</Link></p>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-medium">職歴</h2>
        <div className="mb-4">
          <h3 className="font-medium">Legalscape</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">2020年7月 - 現在</p>
          <p>ソフトウェアエンジニア</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>バックエンドAPIサービスの開発</li>
            <li>Web フロントエンドとインフラの維持</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3 className="font-medium">Dwango</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">2016年12月 - 2020年3月</p>
          <p>プログラミング教育のアシスタントエディター（パートタイム）</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-medium">学歴</h2>
        <div className="mb-4">
          <h3 className="font-medium">東京理科大学大学院 理学研究科 物理学専攻</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">2020年3月修了</p>
          <p>修士号（天文学）</p>
        </div>
        <div className="mb-4">
          <h3 className="font-medium">東京理科大学 理学部 物理学科</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">2018年3月卒業</p>
          <p>学士号（物理学）</p>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-medium">スキル</h2>
        <div className="mb-2">
          <h3 className="font-medium inline">プログラミング言語: </h3>
          <span>TypeScript, Python, C++, HTML, CSS</span>
        </div>
        <div className="mb-2">
          <h3 className="font-medium inline">データベース: </h3>
          <span>RDB, NoSQL</span>
        </div>
        <div className="mb-2">
          <h3 className="font-medium inline">ツール: </h3>
          <span>Git, IaC, CI/CD</span>
        </div>
        <div className="mb-2">
          <h3 className="font-medium inline">クラウドサービス: </h3>
          <span>GCP (一部)</span>
        </div>
        <div className="mb-2">
          <h3 className="font-medium inline">その他: </h3>
          <span>ネットワーク、セキュリティ、システム設計に関する知識</span>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-medium">資格</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>情報処理技術者試験 合格 (2019年6月)</li>
          <li>TOEIC 970点 (2015年7月)</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-medium">個人プロジェクト</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>匿ラのあの回</strong> (2021): 匿名ラジオ専門の検索エンジン</li>
          <li><strong>resonantor</strong>: 銀河クラスターのX線共鳴散乱シミュレーター</li>
        </ul>
      </div>
    </section>
  )
}