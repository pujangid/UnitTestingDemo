import React from 'react';
import { render, fireEvent, screen,act ,waitFor} from "@testing-library/react";
import axios from 'axios';
import Login from "../src/Pages/Login";
import MockAdapter from 'axios-mock-adapter';
const mock = new MockAdapter(axios);

describe("Test The Login Component", () => {

    // test("render login component in the document", () => {
    //     render(<Login />);
    //     const userElement = screen.getByTestId("username-input");
    //     const passwordElement = screen.getByTestId("password-input");

    //     fireEvent.change(userElement, { target: { value: 'myusername' } });
    //     fireEvent.change(passwordElement, { target: { value: 'mypassword' } });

    //     expect(userElement.value).toBe('myusername');
    //     expect(passwordElement.value).toBe('mypassword');
    // })

    // test("submitting the form",async() => {
    //     const mockLogin = jest.fn();
    //     render(<Login onSubmit={mockLogin} />);
        
    //     const userElement = screen.getByTestId("username-input");
    //     const passwordElement = screen.getByTestId("password-input");

    //     fireEvent.change(userElement,{ target: { value: 'myusername' } });
    //     fireEvent.change(passwordElement,{ target: { value: 'pass1234' } });

    //     expect(userElement.value).toBe('myusername');
    //     expect(passwordElement.value).toBe('pass1234');
    //     const LoginBUtton = screen.getByTestId("submit-btn");
    //     fireEvent.click(LoginBUtton);
        
    //     await waitFor(() => {
    //         expect(mockLogin).toHaveBeenCalled();
    // });

    // })

    // it('should handle successful login', async () => {
    //     const mockLogin = jest.fn();
    //     render(<Login onSubmit={mockLogin} />);
    //     const userElement = screen.getByTestId("username-input");
    //     const passwordElement = screen.getByTestId("password-input");

    //     fireEvent.change(userElement,{ target: { value: 'myusername' } });
    //     fireEvent.change(passwordElement,{ target: { value: 'pass1234' } });

    //     expect(userElement.value).toBe('myusername');
    //     expect(passwordElement.value).toBe('pass1234');
        
    //     const LoginBUtton = screen.getByTestId("submit-btn");
    //     fireEvent.click(LoginBUtton);

    //     await waitFor(() => {
    //         expect(mockLogin).toHaveBeenCalledWith('myusername', 'pass1234');
    //         expect(mockLogin).toHaveBeenCalledTimes(1);
    // });
    // })

    it('displays validation errors on submit', () => {
        const mockLogin = jest.fn();
        const { getByLabelText, getByText } = render(<Login onSubmit={mockLogin} />);
        const userElement = screen.getByTestId("username-input");
        const passwordElement = screen.getByTestId("password-input");

        fireEvent.change(userElement,{ target: { value: '' } });
        fireEvent.change(passwordElement,{ target: { value: '' } });

    
        // Trigger form submission without entering any data
        const LoginBUtton = screen.getByTestId("submit-btn");
        fireEvent.click(LoginBUtton);
        
        expect(getByText('username is required')).toBeInTheDocument();
        expect(getByText('Password is required')).toBeInTheDocument();
        // const userValoidationError = screen.getByTestId("username-error");
        // const passwordValidationError = screen.getByTestId("password-error");
    
        // expect(userValoidationError.value).toBe('username is required');
        // expect(passwordValidationError.value).toBe('Password is required');

    //     expect(screen.findAllByText('username is required')).toBe();
    // expect(screen.findAllByText('Password is required')).toBe();
        // Enter invalid email and trigger form submission
        // fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
        // fireEvent.click(submitButton);
    
        // // Check if validation error for email format is displayed
        // expect(getByText('Invalid email format')).toBeInTheDocument();
      });
    

      

})

