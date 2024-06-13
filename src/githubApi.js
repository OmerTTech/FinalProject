import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/repos/kullanici_adi/repository_adi/contents/';
const GITHUB_TOKEN = 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN';

const api = axios.create({
  baseURL: GITHUB_API_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const getFileContent = async (filename) => {
  try {
    const response = await api.get(filename);
    return response.data;
  } catch (error) {
    console.error('Error fetching file content:', error);
    throw error;
  }
};

export const updateFileContent = async (filename, content, sha) => {
  try {
    const response = await api.put(filename, {
      message: 'update file',
      committer: {
        name: 'Your Name',
        email: 'your.email@example.com',
      },
      content: btoa(content), // Base64 encode the content
      sha: sha,
    });
    return response.data;
  } catch (error) {
    console.error('Error updating file content:', error);
    throw error;
  }
};

export const deleteFile = async (filename, sha) => {
  try {
    const response = await api.delete(filename, {
      data: {
        message: 'delete file',
        committer: {
          name: 'Your Name',
          email: 'your.email@example.com',
        },
        sha: sha,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting file:', error);
    throw error;
  }
};
