import { socialLogin } from '@/actions'
import React from 'react'


function SocialLogin() {
  return (
    <form action={socialLogin} className="flex flex-col gap-4">
    <button type="submit" name="action" value="google" className=" px-10 py-2 border-2">
      Continue with google
    </button>

    <button type="submit" name="action" value="github" className=" px-10 py-2 bg-black text-white">
      Continue with github
    </button>
  </form>
  )
}

export default SocialLogin
