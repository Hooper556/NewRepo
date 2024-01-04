"use client"

import React, { FC, ReactElement } from "react"
import { LANDING_PAGE_WAITLIST } from "../../app/constants"
import { subscribeToEmailList } from "../../app/api/waitlist"
const EmailWaitlist: FC = (props): ReactElement => {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState("not-submitted")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log("Submitting email:", email)
    try {
      const response = await subscribeToEmailList(email, LANDING_PAGE_WAITLIST)

      if (response.status === 200) {
        setStatus("success")
        setEmail("")
        setTimeout(() => {
          setStatus("not-submitted")
        }, 2000)
        console.log("Email successfully subscribed!")
      } else {
        setStatus("error")
        setTimeout(() => {
          setStatus("not-submitted")
        }, 2000)
        console.error("Failed to subscribe email:")
      }
    } catch (error) {
      console.error("An error occurred while subscribing:", error)
    }
  }
  return (
    <div className="flex bg-transparent text-center rounded-lg">
      <form onSubmit={handleSubmit} className="flex flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="p-2 focus:outline-none placeholder-opacity-50 rounded-md bg-transparent border border-[#EA8724] text-white  placeholder-white "
          required
        />
        <button
          type="submit"
          className="bg-[#EA8724] text-white font-semibold py-2 px-8 rounded-md active:bg-[#f0a75d] transition duration-300 transform hover:-translate-y-1 shadow-lg"
        >
          {status === "not-submitted" ? "Sign Up" : status === "success" ? "Success!" : "Try Again"}
        </button>
      </form>
    </div>
  )
}

export default EmailWaitlist
