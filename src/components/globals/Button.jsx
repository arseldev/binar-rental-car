/* eslint-disable react/prop-types */
export default function Button({ tag, href, id, description, style, type }) {
  return tag === "a" ? (
    <a href={href} className="btn btn-utama" style={style}>
      {description}
    </a>
  ) : (
    <button id={id} className="btn btn-utama" style={style} type={type}>
      {description}
    </button>
  );
}
