import http from "./httpServices";

export default function addOneContact(contact) {
  return http.post("/contacts", contact);
}
