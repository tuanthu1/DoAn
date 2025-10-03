export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { to, subject, html } = req.body;

  try {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "api-key": "process.env.BREVO_API_KEY",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        sender: { name: "Đặt Vé Xem Phim" },
              to: [{ email: email }],
              subject: `Xác nhận vé xem phim: ${ve.tenphim}`,
              htmlContent: `
                <h2>Xin chào ${ve.tenkhachhang}</h2>
                <p>Bạn đã đặt vé thành công cho bộ phim <b>${ve.tenphim}</b>.</p>
                <p><b>Số lượng vé:</b> ${ve.soluongve}</p>
                <p><b>Tổng tiền:</b> ${ve.tongtien}.000 VND</p>
                <hr/>
                <p>Bạn có thể xem/chỉnh sửa thông tin tại:
                  <a href="https://${window.location.host}/trangchinhsua.html?email=${encodeURIComponent(email)}">Trang chỉnh sửa</a>
                </p>
              `
      })
    });

    if (!response.ok) {
      const error = await response.text();
      return res.status(500).send(error);
    }

    res.status(200).send("Email sent!");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));

