const Chat = class Chat {
  constructor() {
    this.el = document.querySelector('#app');
  }

  /**
   * Render message send
   * @param {Object} message
   * @return {string} html
   */
  renderMessageSend(message) {
    const date = new Date();
    const { author, avatar, text } = message;

    return `
      <div class="message--send row">
        <div class="col-6"></div>
        <div class="col-6">
          <div class="card mb-2">
            <h5 class="card-header">
              <img width="50px" class="rounded-circle" src="${avatar}" class="img-fluid" alt="avatar">
              <span>${author}</span>
            </h5>
            <div class="card-body">
              <p class="card-text">${text}</p>
            </div>
            <div class="card-footer text-muted">
              ${date.toDateString()}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Render message received
   * @param {Object} message
   * @return {string} html
   */
  renderMessageReceived(message) {
    const { author, avatar, text } = message;
    const date = new Date();

    return `
      <div class="message--received row">
        <div class="col-6">
          <div class="card mb-2">
            <h5 class="card-header">
              <img width="50px" class="rounded-circle" src="${avatar}" class="img-fluid" alt="avatar">
              <span>${author}</span>
            </h5>
            <div class="card-body">
              <p class="card-text">${text}</p>
            </div>
            <div class="card-footer text-muted">
              ${date.toDateString()}
            </div>
          </div>
        </div>
        <div class="col-6"></div>
      </div>
    `;
  }

  /**
   * Render messages
   * @return {string} html
   */
  renderMessages() {
    return `<div class="col-9 mt-4">
        <!-- Messages -->
        <div class="messages">
        </div>
        ${this.renderTypingMessage()}
      </div>
    `;
  }

  /**
   * Render Typing Message
   * @return {string} html
   */
  renderTypingMessage() {
    return `
      <!-- Typing message -->
      <div class="typing-message row">
        <div class="col-10">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Messages" aria-label="Messages">
          </div>
        </div>
        <div class="col-2">
          <div class="d-grid gap-2">
            <button class="btn btn-primary" type="submit">Send</button>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * Render Contact
   * @param {Object} contact
   * @return {string} html
   */
  renderContact(contact) {
    const { avatar, name } = contact;

    return `
      <div class="row mb-2">
        <div class="col-3">
          <img width="50px" class="rounded-circle" src="${avatar}" class="img-fluid" alt="avatar">
        </div>
        <div class="col-7 pt-3">
          <h6>${name}</h6>
        </div>
      </div>
      <hr>
    `;
  }

  /**
   * Render Contacts
   * @return {string} html
   */
  renderContacts(contacts) {
    return `
      <div class="col-3 mt-4 text-white">
        ${contacts.map((contact) => this.renderContact(contact)).join('')}
      </div>
    `;
  }

  /**
   * Typing message
   */
  typingMessage() {
    const el = document.querySelector('.typing-message input');
    const messagesEl = document.querySelector('.messages');

    el.addEventListener('keypress', (e) => {
      if (e.keyCode === 13) {
        const text = e.currentTarget.value;
        const message = {
          author: 'Cyril',
          avatar: 'https://media-exp1.licdn.com/dms/image/C5603AQFB2qvfRVtynQ/profile-displayphoto-shrink_100_100/0/1540912243495?e=1642032000&v=beta&t=7ARWE7jnDEN3hQNlvP3MCpPf0zA8XFFvHkM5HBneX2c',
          text
        };

        this.setHistoryMessage(message);

        messagesEl.innerHTML += this.renderMessageSend(message);

        e.currentTarget.value = '';
      }
    });
  }

  /**
   * Run
   */
  run() {
    const contacts = [{
      name: 'Tyrion Lanister',
      avatar: 'https://avatarfiles.alphacoders.com/189/thumb-189599.jpg'
    }, {
      name: 'Sansa Stark',
      avatar: 'https://avatarfiles.alphacoders.com/181/thumb-181441.jpg'
    }];

    this.el.innerHTML += this.renderContacts(contacts);
    this.el.innerHTML += this.renderMessages();

    this.typingMessage();
  }

  getHistoryMessage() {
    return JSON.parse(localStorage.getItem('messages'));
  }

  setHistoryMessage(message) {
    const messages = this.getHistoryMessage();

    messages.push(message);

    localStorage.setItem('messages', JSON.stringify(messages));
  }
};

export default Chat;
