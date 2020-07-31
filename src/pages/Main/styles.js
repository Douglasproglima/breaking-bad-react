import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  background: #2929299c;
  border-radius: 4px;
  box-shadow: 0 0 25px rgb(113 89 193 / 70%);
  padding: 30px;
  margin: 20px auto;

  h1 {
    font-size: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 1px;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 15px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 14px;
  }
`;

// Animação para girar o ícone de loader
const rotate = keyframes`
  from {
    transfom: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SumitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 8px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  list-style: 15px 0;
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  li {
    .content {
      position: absolute;
      bottom: 0;
      background-image: linear-gradient(
        to top,
        #000 30%,
        rgba(0, 0, 0, 0) 100%
      );
      color: #f1f1f1;
      width: 100%;
      padding: 30px;
      overflow: auto;
      -webkit-backdrop-filter: blur(1px);
      backdrop-filter: blur(1px);
    }
    .container-img {
      span {
        font-size: 25px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 1px;
      }
      img {
        position: absolute;
        object-fit: cover;
        /* width: 100%; */
        max-width: 480px;
        min-height: 420px;
        transition: all 0.2s ease-in-out;

        max-width: 380px;
        min-height: 420px;
        margin: 0 auto;
        padding: 0 !important;
        overflow: hidden;
      }
    }
  }
`;

export const Card = styled.div`
  position: relative;
  max-width: 480px;
  min-height: 420px;
  margin: 0 auto;
  padding: 0 !important;
  overflow: hidden;

  .tag {
    position: absolute;
    display: inline-block;
    background: #0a7a42;
    color: #fff;
    padding: 15px 30px;
    top: 20px;
    right: 0;
    z-index: 2;
  }

  .tag-status__unk {
    background: #808080;
  }

  .tag-status__rip {
    background: #f4651f;
  }

  img {
    position: absolute;
    object-fit: cover;
    width: 100%;
    transition: all 0.2s ease-in-out;
  }

  .container img:hover {
    transform: scale(1.1);
  }

  .birth {
    font-size: 0.8em;
    margin: 15px 0;
  }

  .iconBirth {
    font-size: 1em;
    padding-right: 5px;
  }

  .content .desc {
    font-size: 0.735em;
  }
`;
