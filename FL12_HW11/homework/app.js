const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];
const rootNode = document.getElementById('root');

function icon(className, content){
  return `<i class='material-icons ${className}'>${content}</i>`
}

function display(mainElement, data) {
  const container = document.createElement('ul');
  for (let obj of data) {
      const childElement = document.createElement('li');
      if (obj.folder) {
          childElement.className = 'folder';
          childElement.innerHTML = `${icon('fol-icon','folder') + obj.title}`;
      } else {
          childElement.innerHTML = `${icon('ins-drive','insert_drive_file') + obj.title}`;
      }
      container.append(childElement);

      if (obj.children) {
          display(container, obj.children);
      }

      if (obj.folder && !obj.children) {
          const text = document.createElement('p');
          text.className = 'nested';
          text.innerHTML = 'This folder is empty!';
          container.append(text);
      }
  }
  mainElement.append(container);
  if (container.parentElement.tagName === 'UL') {
      container.classList.toggle('nested');
  }
}

display(rootNode, structure);

const openFolder = document.getElementsByClassName('folder');
for (let i = 0; i < openFolder.length; i++){ 
  openFolder[i].addEventListener('click', function() {
    if (this.nextSibling.classList.contains('nested')) {
      this.nextSibling.classList.remove('nested');
      this.nextSibling.classList.toggle('active');
      this.firstChild.innerHTML = 'folder_open';
  } else {
      this.nextSibling.classList.remove('active');
      this.nextSibling.classList.toggle('nested');
      this.firstChild.innerHTML = 'folder';
    }
  })
}