import React from "react";
import OtpInput from "react-otp-input";

export default function OTPInput({
  value = "",
  onChange = () => {},
}: {
  value?: string;
  onChange?: (text: string) => void;
}) {
  return (
    <OtpInput
      value={value}
      onChange={onChange}
      numInputs={4}
      placeholder="VELD"
      renderSeparator={<span>-</span>}
      containerStyle={"flex gap-4 max-w-[400px]"}
      renderInput={(props) => (
        <input
          {...props}
          className="block aspect-[6/6] flex-1 rounded border p-1 text-lg text-black md:text-xl"
        />
      )}
    />
  );
}
