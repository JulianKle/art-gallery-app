import Image from "next/image";

export function ArtPieceDetails({ piece }) {
  return (
    <>
      <h1>{piece.name}</h1>
      <Image
        src={piece.imageSource}
        width={500}
        height={500}
        alt={`Picture of the ${piece.name}`}
      />
      <figcaption>by {piece.artist}</figcaption>
      <ul>
        <li>{piece.genre}</li>
        <li>{piece.year}</li>
      </ul>
    </>
  );
}
