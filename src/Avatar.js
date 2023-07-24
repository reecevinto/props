import { getImageUrl } from "./image.js";

export default function Avatar({ person, size }) {
  <img
    className="avatar"
    src={getImageUrl(person)}
    alt={person.name}
    width={size}
    height={size}
  />;
}
