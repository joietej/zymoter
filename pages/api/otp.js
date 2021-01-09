// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  const phone = req.query.phone;

  const api_key = process.env.OTP_SMS_API_KEY;
  const baseUrl = process.env.OTP_SMS_API_URL;

  const url = `${baseUrl}/${api_key}/SMS/${phone}/AUTOGEN/Test`;

  const response = await fetch(url);
  const result = await response.json();

  res.statusCode = result.Status === "Success" ? 200 : 500;
  res.json(result);
};
