"use server"

import axios from "axios"
import { SENDY_URL } from "@/app/constants"

export const subscribeToEmailList = async (email: string, list_id: string) => {
  const url = `${SENDY_URL}/subscribe`
  const api_key: string = process.env.SENDY_API_KEY || ""

  const payload: { email: string; api_key: string; list: string } = {
    email: email,
    api_key: api_key,
    list: `[${list_id}]`,
  }

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  }

  try {
    const response = await axios.post(url, new URLSearchParams(payload).toString(), {
      headers: headers,
      timeout: 2000,
    })

    return { status: response.status }
  } catch (error) {
    throw error
  }
}
