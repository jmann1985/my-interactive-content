document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const closeModal = document.querySelector('.close');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-description');

  const layerDetails = {
    1: {
      title: 'Layer 1: Physical Security',
      description: 'Physical security includes measures to prevent unauthorized physical access to resources such as buildings, equipment, and sensitive data. Organizations can implement access control systems, security cameras, and security guards to monitor and restrict access to their premises. For example, a company can use biometric authentication, key cards, or PIN-based access control for entry to server rooms or data centers.',
  },
    2: {
      title: 'Layer 2: Network Security',
      description: 'Network security involves protecting the network infrastructure and data transmitted over it from unauthorized access, misuse, or modification. Organizations can employ firewalls, intrusion detection/prevention systems (IDS/IPS), and secure network protocols like SSL/TLS and VPNs. For example, a company can segment its internal network to isolate critical systems and use VPNs for remote access to ensure data confidentiality and integrity.',
  },
    3: {
      title: 'Layer 3: Application Security',
      description: 'Application security entails securing software applications from vulnerabilities, ensuring secure coding practices, and protecting against threats like injection attacks and cross-site scripting. Organizations can use tools like static and dynamic application security testing (SAST/DAST), web application firewalls (WAF), and regular security audits. For example, a company can conduct code reviews and use security-focused development frameworks to minimize the risk of vulnerabilities in their applications.',
  },
    4: {
      title: 'Layer 4: Data Security',
      description: 'Data security involves protecting data from unauthorized access, corruption, or theft, using techniques like encryption, access control, and secure data storage. Organizations can employ encryption for data at rest and in transit, use secure data storage solutions, and establish data backup and recovery procedures. For example, a company can use disk encryption and storage encryption to safeguard sensitive data and maintain offsite backups to protect against data loss or ransomware attacks.',
  },
    5: {
      title: 'Layer 5: Access Control',
      description: 'Access control ensures that only authorized users can access specific resources, following the principle of least privilege, and includes mechanisms like user authentication and authorization. Organizations can implement role-based access control (RBAC), multi-factor authentication (MFA), and single sign-on (SSO) solutions. For example, a company can use MFA to add an additional layer of security for user authentication and employ RBAC to limit access to sensitive data and systems based on job roles.',
  },
    6: {
      title: 'Layer 6: Incident Response',
      description: 'Incident response is a systematic approach to manage and mitigate the impact of security incidents, including detection, analysis, containment, eradication, and recovery. Organizations can develop an incident response plan (IRP), establish a computer security incident response team (CSIRT), and conduct regular incident response drills. For example, a company can create an IRP detailing the roles and responsibilities of team members and the steps to follow in case of a security breach, ensuring a swift and coordinated response.',
  },
  };

  document.querySelectorAll('.layer').forEach(layer => {
    layer.addEventListener('click', () => {
      const layerNumber = layer.getAttribute('data-layer');
      modalTitle.textContent = layerDetails[layerNumber].title;
      modalDescription.textContent = layerDetails[layerNumber].description;
      modal.style.display = 'block';
    });
  });
const imageContainer = document.querySelector('.image-container');
const hiddenImage = document.getElementById('hidden-image');

imageContainer.addEventListener('mouseover', () => {
  hiddenImage.style.display = 'block';
});

imageContainer.addEventListener('mouseout', () => {
  hiddenImage.style.display = 'none';
});

hiddenImage.addEventListener('click', () => {
  window.location.href = 'https://www.minitool.com/backup-tips/remote-access-trojan.html';
});


  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
