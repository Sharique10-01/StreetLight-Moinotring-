"use client";

import React, { useState } from 'react';
import SignIn from '../components/SignIn/SignIn';

const SignInPage = () => {
  return (
    <div>
      <SignIn /> {/* No need to pass onLogin as it's handled inside SignIn */}
    </div>
  );
};

export default SignInPage;
