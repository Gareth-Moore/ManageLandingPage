export default function validateEmail(email: string) {
  return !email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
}
