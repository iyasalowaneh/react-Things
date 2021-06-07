import { Title, Description, CoverImg } from "../styles";

const Home = () => {
  return (
    <div>
      {" "}
      <Title>Things</Title>
      <Description>I love my website</Description>
      <CoverImg
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-688899881-1519413300.jpg"
        alt="NYC"
      />
    </div>
  );
};
export default Home;
