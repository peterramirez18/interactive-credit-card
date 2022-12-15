import React, { useState } from "react";
import Card1 from "./assets/bg-card-front.png";
import Card2 from "./assets/bg-card-back.png";
import CardLogo from "./assets/card-logo.svg";
import bgDesk from "./assets/bg-main-desktop.png";
import bgMobile from "./assets/bg-main-mobile.png";
import ThanskIcon from "./assets/icon-complete.svg"

// import components 
import TextField from "./components/TextField"
import { useFormik } from "formik";
import { cardNumberSchema } from "./schemas/CardInfo";
import { motion } from "framer-motion"


const App = () => {
  const [submitted, setSubmitted] = useState(false)
  const onSubmit = () => {
    setSubmitted(true)
  }

  const { errors, values, handleChange, onBlur, handleSubmit } = useFormik({
    initialValues: {
      name: "",
      number: "",
      month: "",
      year: "",
      cvc: "",
    },
    validationSchema: cardNumberSchema,
    onSubmit
  })
  return (
    <main className="h-screen w-full flex items-center justify-center">
      <div className=" z-1 inset-0 absolute">
      </div>
      <div className="xl:pl-[62px] relative mx-auto  flex flex-col xl:flex-row items-center justify-center w-full sm:w-fit">
        <img className="left-0 top-0 object-cover w-[33.5vw] h-screen hidden xl:block fixed" src={bgDesk} alt="" />
        <img className="fixed xl:hidden left-0 top-0 w-[100vw] max-h-[400px]" src={bgMobile} alt="" />
        {/* cards */}
        <div className="flex flex-col w-full px-5  -space-y-20 xl:space-y-0 xl:gap-y-7 xl:flex-col-reverse">
          <div className="relative w-[70vw] sm:w-[450px] ml-auto xl:ml-0 xl:translate-x-24 ">
            <img className="w-full" src={Card2} alt="" />
            <span className="absolute top-[45%]  right-[50px] text-white">{values.cvc ? values.cvc : '000'}</span>
          </div>
          <div className="relative w-[70vw] sm:w-[450px]">
            <img className="w-full" src={Card1} alt="" />
            <div className="flex gap-y-5 flex-col absolute inset-0 p-6 px-8 text-white">
              <img className="w-[88px]" src={CardLogo} alt="" />
              <span className="flex-1 font-primary text-[1.3rem] sm:text-[1.8rem] tracking-widest sm:mt-10">{values.number ? values.number : '0000 0000 0000 0000'}</span>
              <div className="tracking-widest text-[0.98rem] w-full flex items-center justify-between uppercase">
                <span>{values.name ? values.name : 'JANE APPLESEED'}</span>
                <span>
                  {values.month ? values.month : '00'}/{values.year ? values.year : '00'}
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* form - thanks */}
        <div className="mt-10 min-w-[280px] xl:mt-0 px-5 relative -translate-x-0 xl:-translate-x-24">
          {!submitted ?
            <Form submitted={submitted} errors={errors} values={values} handleChange={handleChange} onBlur={onBlur} handleSubmit={handleSubmit} />
            :
            <Thanks submitted={submitted} />
          }
        </div>
      </div>
    </main>
  );
};

export default App;

function Form({ submitted, errors, values, handleChange, onBlur, handleSubmit }) {
  return (
    <motion.form
      key={submitted}
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      onSubmit={handleSubmit}
      action=""
      className="flex font-primary flex-col gap-y-6 text-very-dark"
    >
      <TextField
        value={values.name}
        onChange={handleChange}
        onBlur={onBlur}
        label={"CARDHOLDER NAME"}
        type={"text"}
        placeholder={"e,g, Jane Appleseed"}
        name={"name"}
        className={errors.name && 'input-error'}
      />
      <TextField
        value={values.number}
        onChange={handleChange}
        onBlur={onBlur}
        label={"CARD NUMBER"}
        type={"text"}
        placeholder={"e.g. 1234 5678 9123 0000"}
        name={"number"}
        className={errors.number && 'input-error'}
      />
      <div className="flex items-center gap-x-3">
        <div className="flex flex-col w-2/4">
          <label className="label" htmlFor="">
            EXP. DATE (MM/YY)
          </label>
          <div className="flex items-center gap-x-2">
            <TextField
              value={values.month}
              onChange={handleChange}
              onBlur={onBlur}
              type={"text"}
              placeholder={"MM"}
              name={"month"}
              className={errors.month && 'input-error'}
            />
            <TextField
              value={values.year}
              onChange={handleChange}
              onBlur={onBlur}
              type={"text"}
              placeholder={"YY"}
              name={"year"}
              className={errors.year && 'input-error'}
            />
          </div>
        </div>
        <div className="flex flex-col w-2/4">
          <TextField
            value={values.cvc}
            onChange={handleChange}
            onBlur={onBlur}
            label={"CVC"}
            type={"text"}
            placeholder={"e.g. 123"}
            name={"cvc"}
            className={errors.cvc && 'input-error'}
          />
        </div>
      </div>
      <button className="btn mt-9">Confirm</button>
    </motion.form>
  )
}

function Thanks({ submitted }) {
  return (
    <motion.div
      key={submitted}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className=" sm:w-[500px] flex items-center text-center flex-col gap-y-5">
      <div>
        <img src={ThanskIcon} alt="" />
      </div>      <div>
        <h1 className=" text-2xl uppercase text-very-dark">Thanks</h1>
        <p className=" text-lg text-light">We've added your card details</p>
      </div>
      <button className=" btn px-32">Continue</button>
    </motion.div>
  )
}
