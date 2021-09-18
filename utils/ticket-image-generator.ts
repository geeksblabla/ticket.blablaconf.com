import { encode } from "universal-base64";
import { User } from "./db";
// Generate ticket using cloudinary API
export const getTicketImg = (user: User) => {
  if (!user) return "/img/ticket_placeholder.png";

  const name = user.name === null ? user.login : user.name;
  const FontSize = name.length > 20 ? 50 : 60;
  const NameLayout = `l_text:Roboto_${FontSize}_bold:${name},co_rgb:40347B,g_north_west,x_321,y_76`;
  const UserNameLayout = `l_text:Roboto_40:${user.login},co_rgb:6A6198,g_north_west,x_377,y_160`;
  const base64 = encode(user.avatar);
  const TicketNumber = `l_text:Arial_70_bold:№ 0${user.ticketNumber},co_rgb:FFFFFF,g_north_west,x_1533,y_120,a_90/`;
  const RoundedAvatar = `https://res.cloudinary.com/dvapezchz/image/upload/w_460,h_460,c_fill,q_auto,f_webp,fl_awebp/l_fetch:${base64},w_460,h_460/w_460,h_460,c_thumb,r_max/Mask_Group_qglnkm.png`;
  const base = encode(RoundedAvatar);
  const AvatarLayout = `l_fetch:${base},g_north_west,x_100,y_40,w_200,h_200`;

  const LayoutGenderTemplate = "v1601647683/ticket_boy_template_r4m0xf.png";
  // user.gender === "boy"
  //   ? "v1601647683/ticket_boy_template_r4m0xf.png"
  //   : "v1601647684/ticket_girl_template_w45a2r.png";
  return `https://res.cloudinary.com/dvapezchz/image/upload/${NameLayout}/${UserNameLayout}/${TicketNumber}/${AvatarLayout}/${LayoutGenderTemplate}`;
};

export const getTicketGraphImg = (user: User) => {
  const ticket = getTicketImg(user);
  return `https://res.cloudinary.com/demo/image/fetch/w_1200,h_630,c_pad,b_rgb:6955CB/${ticket}`;
};
