import { GetServerSidePropsContext } from 'next'
import { services } from '../data'

export default function Home() {
  // console.log('CLIENT',services)
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()
//   console.log('SERVER',data)
//   return {
//     props: {
//       services: data
//     }
//   }
// }

// export const getStaticProps = async (context: GetServerSidePropsContext) => {
//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()
//   console.log('SERVER',data)
//   return {
//     props: {
//       services: data
//     }
//   }
// }
