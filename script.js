document.addEventListener("DOMContentLoaded", () => {
    const initialCenter = document.getElementById("initial-center");
    const chatArea = document.getElementById("chat-area");
    const bottomInput = document.getElementById("bottom-input");
    const suggestionButtons = document.getElementById("suggestion-buttons");
    const history = document.getElementById("history");
    const bottomUserInput = document.getElementById("bottom-user-input");
    const bottomSendBtn = document.getElementById("bottom-send-btn");
    const centerUserInput = document.getElementById("user-input");
    const centerSendBtn = document.getElementById("center-send-btn");
    const newConversationBtn = document.getElementById("new-conversation-btn");
  
    let currentTitle = null; // Current conversation title
  
    // Function to switch to chat interface
    const switchToChat = () => {
      initialCenter.classList.add("d-none");
      chatArea.classList.remove("d-none");
      bottomInput.classList.remove("d-none");
    };
  
    // Function to reset to initial screen
    const resetToInitial = () => {
      initialCenter.classList.remove("d-none");
      chatArea.innerHTML = '<div class="text-muted text-center">Commencez une conversation</div>';
      chatArea.classList.add("d-none");
      bottomInput.classList.add("d-none");
      centerUserInput.value = "";
      bottomUserInput.value = "";
    };
  
    // Function to add a message to the chat
    const addMessage = (text, sender) => {
      const messageDiv = document.createElement("div");
      messageDiv.className = `message ${sender}`;
      messageDiv.innerHTML = `<div class="bubble">${text}</div>`;
      chatArea.appendChild(messageDiv);
      chatArea.scrollTop = chatArea.scrollHeight; // Scroll to the bottom
    };
  
    // Function to add a new conversation title to the history
    const addToHistory = (title) => {
      const item = document.createElement("li");
      item.textContent = title;
      item.className = "text-primary";
      item.addEventListener("click", () => {
        alert(`Chargement de la conversation : ${title}`);
      });
      history.appendChild(item);
    };
  
    // Event listener for suggestion buttons
    suggestionButtons.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        const question = event.target.textContent;
        if (!currentTitle) {
          currentTitle = question;
          addToHistory(currentTitle);
        }
        switchToChat();
        addMessage(question, "user");
  
        // Simulate bot response
        setTimeout(() => {
          addMessage("Ceci est une réponse automatique du chatbot.", "bot");
        }, 1000);
      }
    });
  
    // Event listener for center send button
    centerSendBtn.addEventListener("click", () => {
      const text = centerUserInput.value.trim();
      if (text) {
        if (!currentTitle) {
          currentTitle = text;
          addToHistory(currentTitle);
        }
        switchToChat();
        addMessage(text, "user");
        centerUserInput.value = "";
  
        // Simulate bot response
        setTimeout(() => {
          addMessage("Ceci est une réponse automatique du chatbot.", "bot");
        }, 1000);
      }
    });
  
    // Event listener for bottom send button
    bottomSendBtn.addEventListener("click", () => {
      const text = bottomUserInput.value.trim();
      if (text) {
        addMessage(text, "user");
        bottomUserInput.value = "";
  
        // Simulate bot response
        setTimeout(() => {
          addMessage("Ceci est une réponse automatique du chatbot.", "bot");
        }, 1000);
      }
    });
  
    // Event listener for "New Conversation" button
    newConversationBtn.addEventListener("click", () => {
      currentTitle = null;
      resetToInitial();
    });
  });
  