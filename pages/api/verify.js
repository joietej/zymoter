export default async (req, res) => {
  const session_id = req.query.session_id;
  const code = req.query.code;
  const api_key = process.env.OTP_SMS_API_KEY;
  const baseUrl = process.env.OTP_SMS_API_URL;

  const url = `${baseUrl}/${api_key}/SMS/VERIFY/${session_id}/${code}`;

  const response = await fetch(url);
  const result = await response.json();

  res.statusCode = result.Status === "Success" ? 200 : 500;
  res.json(result);
};
