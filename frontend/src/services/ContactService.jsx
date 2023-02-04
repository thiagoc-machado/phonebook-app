import axios from 'axios';
export class ContactService {

  //static serverURL = 'http://localhost:9000';
  static serverURL = 'http://localhost:8000' 

  static getGroups() {
    let dataURL = `${this.serverURL}/groups/groups`;
    return axios.get(dataURL);
  }

  static getGroup(contact) {
    let groupId = contact.groupId;
    let dataURL = `${this.serverURL}/groups/groups/${groupId}/`;
    return axios.get(dataURL);
  }

  static getAllContacts() {
    let dataURL = `${this.serverURL}/contacts/contacts`;
    return axios.get(dataURL);
  }

  static getContact(contactId) {
    let dataURL = `${this.serverURL}/contacts/contacts/${contactId}/`;
    return axios.get(dataURL);
  }

  static createContact(contact) {
    let dataURL = `${this.serverURL}/contacts/contacts/`;
    return axios.post(dataURL, contact);
  }

  static updateContact(contact, contactId) {
    let dataURL = `${this.serverURL}/contacts/contacts/${contactId}/`;
    console.log(contact)
    return axios.put(dataURL, contact);
  }

  static deleteContact(contactId) {
    let dataURL = `${this.serverURL}/contacts/contacts/${contactId}/`;
    return axios.delete(dataURL);
  }

  static createUser(user) {
    let dataURL = `${this.serverURL}/auth/`;
    return axios.post(dataURL, user);
  }

}
