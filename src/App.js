import "./styles.css";

import Avatar from "./Avatar.js";

function Card({ children }) {
  return <div className="card">{children}</div>;
}
export default function Profile() {
  return (
    <div>
      <Card>
        <Avatar
          person={{ name: "Katsuko Saruhashi", imageId: "YfeOqp2" }}
          size={100}
        />
      </Card>
      <Card>
        <Avatar
          size={80}
          person={{
            name: "Aklilu Lemma",
            imageId: "OKS67lh"
          }}
        />
      </Card>
      <Card>
        <Avatar
          size={50}
          person={{
            name: "Lin Lanying",
            imageId: "lbX5QH6"
          }}
        />
      </Card>
    </div>
  );
}
