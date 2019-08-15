import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div className="container">
    <Head>
      <title>remote.amsterdam</title>
    </Head>

    <Nav />

    <main>
      <p>
        <Link href="https://remote.amsterdam">remote.amsterdam</Link> aims to build a community for remote workers based in Amsterdam.
      </p>

      <p>
        <h6 style={{ fontSize: '56px', margin: '42px 0px 0' }}>👩🏼‍💻👨🏽‍💻</h6>
        The lack of colleagues can be one of the less glamourous features of working remotely. By connecting remote engineers, designers and product people, we hope to maintain these recurring relationships.
      </p>

      <p>
        <h6 style={{ fontSize: '56px', margin: '42px 0px 0' }}>🌍</h6>
        Digital Nomad in Amsterdam? <Link href="https://nomadlist.com/amsterdam">Check out NomadList</Link> for coworking spaces, accommodation and other recommendations.
      </p>

      <p>
        <h6 style={{ fontSize: '56px', margin: '42px 0px 0' }}>🚧</h6>
        This project is a work-in-progress, but if you're interested in joining the <Link href="https://remote.amsterdam">remote.amsterdam</Link> Slack group, leave your email address.
      </p>
    </main>


    <style jsx>{`
      .container {
        max-width: 800px;
        margin: 20px auto;
        padding: 0 20px;
      }
      main > p:first-child {
        margin-top: 32px;
      }
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      p {
        color: #333;
        line-height: 1.6;
      }
    `}</style>
  </div>
)

export default Home
