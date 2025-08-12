import { toast, ToastContainer, Zoom } from "react-toastify";
import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";

import { LocationSection } from "../ui/LocationSection";
import Navbar from "../ui/Navbar";
import { Container } from "./Location";
import { Heading, Paragraph } from "./home/styles/heroSecion.styled";
import Footer from "../ui/footer/Footer";

const StyledSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: url("/home/desktop/bg-pattern-hero-home.svg") var(--color-peach);
  background-position: left -100px;
  background-repeat: no-repeat;
  border-radius: 15px;
  overflow: hidden;
  width: 100%;

  @media (max-width: 600px) {
    max-height: 946px;
    flex-direction: column;
    border-radius: 0;
    margin-bottom: 6rem;
  }

  @media (min-width: 601px) and (max-width: 1062px) {
    max-width: 786px;
    margin: 0 auto;
    flex-direction: column;
    margin-bottom: 8rem;
  }
  @media (min-width: 1063px) {
    padding: 3rem 0;
    margin-bottom: 8rem;
  }
`;
const Main = styled.main`
  @media (max-width: 600px) {
    margin-bottom: 6rem;
  }
  @media (min-width: 601px) {
    margin-bottom: 8rem;
  }
`;

const ContactUsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem;
  color: white;

  @media (max-width: 600px) {
    text-align: center;
    padding: 4rem 1.5rem 0 1.5rem;
  }
`;

const ContactUsText = styled(Paragraph)`
  max-width: 458px;

  @media (min-width: 601px) and (max-width: 1062px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 600px) {
    padding: 4rem 1.5rem;
    width: 100%;
  }
  @media (min-width: 601px) and (max-width: 1062px) {
    width: 100%;
    padding: 0 3.625rem;
  }
`;

const InputStyles = css`
  font-size: 15px;
  line-height: 26px;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.6);
  outline: none;
  color: var(--color-white);

  &:hover {
    border-bottom: 2px solid #ffffff;
  }
  &::placeholder {
    color: var(--color-white);
    opacity: 60%;
    font-weight: medium;
  }
`;

const Input = styled.input`
  ${InputStyles}
  width: 100%;
  height: 38px;
  @media (min-width: 1063px) {
    width: 380px;
  }
`;
const TextArea = styled.textarea`
  ${InputStyles}
  width: 100%;
  height: 102px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (min-width: 601px) and (max-width: 1062px) {
    margin-bottom: 4rem;
  }
`;

const InputButton = styled.input`
  width: 152px;
  height: 56px;
  border: none;
  border-radius: 0.5rem;
  background-color: white;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 500;
  text-transform: uppercase;
  color: var(--color-black);
  cursor: pointer;
  transition: 0.3s ease-in-out;

  @media (max-width: 600px) {
    margin: 1rem auto;
  }

  &:hover {
    color: var(--color-white);
    background-color: var(--color-light-peach);
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

const Error = styled.p`
  position: absolute;
  top: 50%;
  right: 0;
  display: flex;
  gap: 3px;
  align-items: center;
  color: var(--color-white);
  ${(props) =>
    props.type === "textarea" &&
    css`
      top: 0;
    `}
  ${(props) =>
    props.type !== "textarea" &&
    css`
      bottom: 25px;
    `}
`;

export default function Contact() {
  return (
    <section>
      <header>
        <Container>
          <Navbar />
        </Container>
      </header>
      <Main>
        <Container>
          <ContactFormSection />
          <LocationSection />
        </Container>
      </Main>

      <Footer />
    </section>
  );
}

export function ContactFormSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const notificationProperties = {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "light",
    transition: Zoom,
  };

  return (
    <StyledSection>
      <ContactUsContent>
        <Heading as="h1">Contact us</Heading>
        <ContactUsText>
          Ready to take it to the next level? Let’s talk about your project or
          idea and find out how we can help your business grow. If you are
          looking for unique digital experiences that’s relatable to your users,
          drop us a line.
        </ContactUsText>
      </ContactUsContent>
      <Form
        onSubmit={handleSubmit((data) => {
          toast.success("Message Sent", notificationProperties);
          console.log(data);
          reset();
        })}
      >
        <InputContainer>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            {...register("name", {
              required: "Can't be empty",
            })}
          />
          {errors.name && (
            <Error>
              {errors.name.message}
              <img src="/contact/desktop/icon-error.svg" />
            </Error>
          )}
        </InputContainer>
        <InputContainer>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            {...register("email", {
              required: "Can't be empty",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "invalid email input",
              },
            })}
          />
          {errors.email && (
            <Error>
              {errors.email.message}
              <img src="/contact/desktop/icon-error.svg" />
            </Error>
          )}
        </InputContainer>
        <InputContainer>
          <Input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"
            {...register("phone", {
              required: "Can't be empty",
              pattern: {
                value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                message: "Invalid phone number",
              },
            })}
          />
          {errors.phone && (
            <Error>
              {errors.phone.message}
              <img src="/contact/desktop/icon-error.svg" />
            </Error>
          )}
        </InputContainer>
        <InputContainer>
          <TextArea
            placeholder="Your Message"
            id="message"
            name="message"
            {...register("message", {
              required: "Can't be empty",
            })}
          />
          {errors.message && (
            <Error type="textarea">
              Can't be empty
              <img src="/contact/desktop/icon-error.svg" />
            </Error>
          )}
        </InputContainer>
        <ButtonContainer>
          <InputButton type="submit" />
        </ButtonContainer>
      </Form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="light"
        transition={Zoom}
      />
    </StyledSection>
  );
}
