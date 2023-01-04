import { GetServerSidePropsContext } from "next";
import { services } from "../data";
import ServiceCard from "../components/ServiceCard";
import { motion } from "framer-motion";

export default function Home() {
  // console.log('CLIENT',services)
  const variants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0
    },
  };
  const stagger = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.15,
      }
    }
  }
  const routeAnimation = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.25,
      },
    }
  }
  return (
    <motion.div 
    variants={routeAnimation}
    initial="initial"
    animate="animate"
    className="flex flex-col flex-grow px-6 pt-1 overflow-auto">
      <h5 className="my-3 text-base font-medium">
        Hi, I&apos;m Tran Huynh. I love building things that live on the
        internet, whether that be websites, applications, or anything in
        between. My goal is to always build products that bring value to the end
        user.
        <br /> I love problem solving and learning new things. I&apos;m always
        looking for new opportunities to work on challenging projects and learn
        new skills.
        <br /> When I&apos;m not coding, you can find me gardening, spending
        time with family, or reading a book.
      </h5>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-bold tracking-wide">
          Working with me? You will find I do
        </h4>
        <motion.div 
        variants={stagger}
        initial="initial"
        animate="animate"
        className="grid gap-4 my-3 overflow-auto md:grid-cols-2">
          {services.map((service) => (
            <motion.div
              variants={variants}
              className="col-span-2 p-3 bg-gray-200 rounded-lg dark:bg-dark-700 md:col-span-1"
              key={service.title}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
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
