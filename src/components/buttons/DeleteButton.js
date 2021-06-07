import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const handleDelete = (productID) => {
    props.deleteProduct(productID);
  };
  return (
    <DeleteButtonStyled onClick={() => handleDelete(props.productID)}>
      Delete
    </DeleteButtonStyled>
  );
};
export default DeleteButton;
