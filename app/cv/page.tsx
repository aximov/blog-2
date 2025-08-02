import Link from 'next/link'

export default function CVPage() {
  return (
    <section className="max-w-4xl">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">CV</h1>
      
      <p className="mb-8">
        I'm currently working at <Link href="https://legalscape.jp" className="underline hover:no-underline">Legalscape</Link> as an Engineer. 
        Mainly developing backend API services, also maintaining web frontend and infrastructure.
      </p>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-medium">Works</h2>
        
        <h3 className="mb-3 text-lg font-medium">Personal</h3>
        <ul className="list-disc list-inside mb-6 space-y-1">
          <li>
            <Link href="https://tokura.app/" className="underline hover:no-underline">匿ラのあの回</Link> (2021): 
            A search engine specialized for{' '}
            <Link href="https://www.youtube.com/channel/UClSsb_e0HDQ-w7XuwNPgGqQ/featured" className="underline hover:no-underline">匿名ラジオ</Link>.
          </li>
        </ul>

        <h3 className="mb-3 text-lg font-medium">Postgraduate</h3>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>resonantor</strong>: A simulator for X-ray resonant scattering in clusters of galaxies, written in C++, built with Geant4.</li>
          <li><strong>resonantor-pipeline</strong>: An automatic and parallel pipeline for resonantor. Written in Python.</li>
          <li><strong>mg-control-tower</strong>: An IaC hub of on-premises Linux machines, powered by Ansible, Docker, Prometheus, Alertmanager, Grafana.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-medium">Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>High energy astronomy</li>
          <li>Statistics</li>
          <li>TypeScript, Python, C++, HTML, CSS</li>
          <li>RDB, NoSQL</li>
          <li>Git, IaC, CI/CD</li>
          <li>Intermediate familiarity with network, security, systems design, and software design</li>
          <li>Familiarity with some GCP services</li>
          <li>Familiarity with Elasticsearch</li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-medium">Experience</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 pr-4 whitespace-nowrap">When</th>
                <th className="text-left py-2 pr-4 whitespace-nowrap">Where</th>
                <th className="text-left py-2 whitespace-normal">What</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 pr-4 whitespace-nowrap">Jul 2020 - Present</td>
                <td className="py-2 pr-4 whitespace-nowrap">Legalscape</td>
                <td className="py-2 whitespace-normal">Software Engineer</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4 whitespace-nowrap">Dec 2016 - Mar 2020</td>
                <td className="py-2 pr-4 whitespace-nowrap">Dwango</td>
                <td className="py-2 whitespace-normal">Assistant Editor in Programming Education (part-time)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-medium">Education</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 pr-4 whitespace-nowrap">When</th>
                <th className="text-left py-2 pr-4 whitespace-nowrap">Degree</th>
                <th className="text-left py-2 whitespace-normal">Where</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 pr-4 whitespace-nowrap">Mar 2020</td>
                <td className="py-2 pr-4 whitespace-nowrap">MSc in astronomy</td>
                <td className="py-2 whitespace-normal">Tokyo University of Science Graduate School of Science Department of Physics Matsushita Group</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4 whitespace-nowrap">Mar 2018</td>
                <td className="py-2 pr-4 whitespace-nowrap">BS in physics</td>
                <td className="py-2 whitespace-normal">Tokyo University of Science Faculty of Science Division I Department of Physics</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-medium">Certification</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2 pr-4 whitespace-nowrap">When</th>
                <th className="text-left py-2 pr-4 whitespace-normal">What</th>
                <th className="text-left py-2 whitespace-nowrap">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-2 pr-4 whitespace-nowrap">Jun 2019</td>
                <td className="py-2 pr-4 whitespace-normal">IPA Applied Information Technology Engineer Examination</td>
                <td className="py-2 whitespace-nowrap">Passed</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 pr-4 whitespace-nowrap">Jul 2015</td>
                <td className="py-2 pr-4 whitespace-normal">TOEIC</td>
                <td className="py-2 whitespace-nowrap">970</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}