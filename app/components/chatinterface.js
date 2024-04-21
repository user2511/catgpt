// components/ChatInterface.js

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, InputGroup, Input, Button } from '@shadcn/ui';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to send a message to the AI
  const sendMessage = () => {
    if (inputValue.trim() === '') return;
    const newMessage = {
      sender: 'user',
      text: inputValue.trim()
    };
    setMessages([...messages, newMessage]);
    setInputValue('');
    // Call function to send message to AI
    // For the sake of this example, let's assume we're calling an API to get the response
    // receiveMessageFromAI(newMessage.text);
  };

  // Function to receive a message from the AI (in a real application, this would be done asynchronously)
  const receiveMessageFromAI = (userMessage) => {
    const responseMessage = {
      sender: 'AI',
      text: 'This is a dummy response from the AI.'
    };
    // Simulate a delay before receiving the response
    setTimeout(() => {
      setMessages([...messages, responseMessage]);
    }, 1000);
  };

  // useEffect to simulate receiving a response from the AI when the messages state changes
  useEffect(() => {
    if (messages[messages.length - 1]?.sender === 'user') {
      receiveMessageFromAI(messages[messages.length - 1].text);
    }
  }, [messages]);

  return (
    <Container>
      <Row>
        <Col>
          <div style={{ minHeight: '300px', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', overflowY: 'scroll' }}>
            {messages.map((message, index) => (
              <div key={index} style={{ marginBottom: '10px' }}>
                {message.sender === 'user' ? (
                  <div style={{ textAlign: 'right' }}>
                    <strong>You:</strong> {message.text}
                  </div>
                ) : (
                  <div>
                    <strong>AI:</strong> {message.text}
                  </div>
                )}
              </div>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <InputGroup>
            <Input
              placeholder="Type your message here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button onClick={sendMessage}>Send</Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatInterface;
