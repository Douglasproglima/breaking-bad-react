import styled, { keyframes, css } from 'styled-components';

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

  li {
    font-size: 16px;
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #f3f3f3d9;

    & + li {
      border-top: 2px solid #7159c1b3;
    }

    a {
      color: #f3f3f3d9;
      text-decoration: none;
    }

    a:hover {
      color: #a18be8cc;
    }
  }
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    color: #fff;
    background-color: #7159c1;
    padding: 7px 30px;
    border-radius: 16px;
    font-size: 16px;
    text-decoration: none;
  }

  a:hover {
    color: #ffffffeb;
    background-color: #523e94;
  }

  img {
    width: 120px;
    border-radius: 50%;
    margin-top: 20px;
  }

  h1 {
    font-size: 24px;
    margin-top: 10px;
  }

  p {
    margin-top: 5px;
    font-size: 14px;
    color: #666;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;

export const IssuesList = styled.ul`
  color: #fff;
  margin-top: 30px;
  padding-top: 30px;
  border-style: 1px solid;
  list-style: none;

  li {
    display: flex;
    padding: 15px 10px;
    border: 1px solid #7159c1;

    & + li {
      margin-top: 10px;
    }

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid #7159c1;
    }

    div {
      flex: 1;
      margin-left: 15px;
    }

    strong {
      font-size: 16px;

      a {
        text-decoration: none;
        color: #fff;

        &:hover {
          color: #7159c1;
        }
      }

      span: {
        background: #d22626;
        color: #fff;
        border-radios: 2px;
        font-size: 12px;
        font-weight: 600;
        height: 20px;
        padding: 3px 4px;
        margin-left: 10px;
      }
    }

    p {
      margin-top: 5px;
      font-size: 12px;
      color: #999;
    }
  }
`;
