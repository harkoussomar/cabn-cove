import {HiOutlineMail } from "react-icons/hi";
import styled from "styled-components";
import { capitalizeName } from "../../utils/helpers";

const Card = styled.div`
  position: relative;
  background-color: var(--color-grey-0);
  border-radius: 1rem;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);

  &:hover {
    transform: translateY(-6px);
    box-shadow: var(--shadow-md);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect ratio */
  background-color: var(--color-grey-100);
  overflow: hidden;
`;

const UserImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;


const CardContent = styled.div`
  padding: 2rem 1.5rem 1.5rem;
  text-align: center;
`;

const UserName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--color-grey-800);
  margin-bottom: 0.75rem;
`;

const EmailContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--color-grey-500);
  font-size: 1rem;
  transition: color 0.2s ease;

  &:hover {
    text-decoration: underline;
    color: ${(props) =>
      props.$email_verified
        ? "var(--color-green-700)"
        : "var(--color-blue-700)"};
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const StatusBadge = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  background-color: ${(props) =>
    props.$email_verified ? "var(--color-green-100)" : "var(--color-blue-100)"};
  color: ${(props) =>
    props.$email_verified ? "var(--color-green-700)" : "var(--color-blue-700)"};
`;


export function UserCard({ user }) {
  const {
    email,
    user_metadata: { avatar, fullName, email_verified },
  } = user;

  const handleImageError = (e) => {
    e.target.style.display = "none";
    e.target.parentElement.innerHTML = `<div class="fallback">👤</div>`;
  };

  return (
    <Card>
      <ImageContainer>
        <UserImage>
          <img
            src={avatar || "/default-user.jpg"}
            alt={fullName}
            onError={handleImageError}
          />
        </UserImage>
      </ImageContainer>

      <CardContent>
        <UserName>{capitalizeName(fullName)}</UserName>
        <EmailContainer
          href={`mailto:${email}`}
          $email_verified={email_verified}
        >
          <HiOutlineMail />
          {email}
        </EmailContainer>
        <StatusBadge $email_verified={email_verified}>
          {email_verified ? "Verified Member" : "Unverified Member"}
        </StatusBadge>
      </CardContent>
    </Card>
  );
}
