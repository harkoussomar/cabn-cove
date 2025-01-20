import React from "react";
import styled from "styled-components";
import { UserCard } from "./UserCard";
import { useUsers } from "./useUsers";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import Row from "../../ui/Row";
import SignupForm from "../authentication/SignupForm";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

// Main Users Component
const UsersCard = () => {
  const { isLoading, users } = useUsers();

  return (
    <Row>
      {!isLoading && <Grid>
        {users?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Grid>}

      <Modal>
        <Modal.Open opens="user-form">
          <Button>Add new user</Button>
        </Modal.Open>
        <Modal.Window name="user-form">
          <SignupForm/>
        </Modal.Window>
      </Modal>
    </Row>
  );
};

export default UsersCard;
