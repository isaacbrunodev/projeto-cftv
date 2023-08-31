document.addEventListener('DOMContentLoaded', function() {
    const submenus = document.querySelectorAll('.submenu');
  
    submenus.forEach((submenu) => {
      submenu.addEventListener('click', function() {
        const submenuText = this.textContent;
  
        if (submenuText === 'Quem Somos') {
          openSubMenu('quem-somos');
        } else if (submenuText === 'Gerenciamento de Câmeras') {
          openSubMenu('gerenciamento-cameras');
        } else if (submenuText === 'Acesso a Gravações') {
          openSubMenu('acesso-gravacoes');
        } else if (submenuText === 'Fale Conosco') {
          openSubMenu('fale-conosco');
        }
      });
    });
  });
  
  function openSubMenu(submenuId) {
    const submenuContent = document.getElementById(submenuId + '-content');
    submenuContent.style.display = 'flex';
  }
  
  function openImage(imagePath) {
    window.open(imagePath);
  }
  
  function expandSubMenu(imagePath) {
    const expandedImage = document.getElementById('expandedImage');
    expandedImage.src = imagePath;
    const expandedImageContainer = document.querySelector('.expanded-image-container');
    expandedImageContainer.style.display = 'flex';
  }
  
  function closeSubMenu() {
    const submenuContents = document.querySelectorAll('.submenu-content');
    submenuContents.forEach((submenu) => {
      submenu.style.display = 'none';
    });
  }
  
  document.addEventListener('click', function(event) {
    const expandedImageContainer = document.querySelector('.expanded-image-container');
    if (event.target === expandedImageContainer) {
      expandedImageContainer.style.display = 'none';
    }
  });
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeSubMenu();
    }
  });
  
  // Seletor dos elementos de navegação
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Função para trocar a tela
  function changePage(page) {
    const pages = document.querySelectorAll('.page');
    pages.forEach((p) => {
      p.style.display = 'none';
    });
    const selectedPage = document.getElementById(page);
    selectedPage.style.display = 'block';
  }
  
  // Adicione o evento de clique aos elementos de navegação
  navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const targetPage = event.target.getAttribute('data-page');
      changePage(targetPage);
    });
  });
  function showImage() {
    // Código para exibir a imagem ao clicar no submenu
  }
  
  function showTooltip() {
    // Código para exibir o texto ao passar o mouse sobre a imagem
  }
  function togglePasswordVisibility() {
    var passwordInput = document.querySelector('.senha');
    var togglePasswordIcon = document.querySelector('.toggle-password');
  
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePasswordIcon.innerHTML = '&#128064;'; // Altera o ícone para olho fechado
    } else {
      passwordInput.type = 'password';
      togglePasswordIcon.innerHTML = '&#128065;'; // Altera o ícone para olho aberto
    }
  }
    