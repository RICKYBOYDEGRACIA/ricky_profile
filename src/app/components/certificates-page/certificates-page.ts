import { Component } from '@angular/core';
type Certificate = {
  category: string,
  iconImage: string,
  name: string,
  description: string,
}

@Component({
  imports: [],
  selector: 'app-certificates-page',
  styleUrl: './certificates-page.css',
  templateUrl: './certificates-page.html',
})
export class CertificatesPage {

  certificates: Certificate[] = [
    {
      category: 'type A',
      iconImage: 'npm.png',
      name: 'Lorem Ipsum ',
      description: 'ipsum dolor sit amet.'
    },
    {
      category: 'type B',
      iconImage: 'tailwind.png',
      name: 'Lorem Ipsum ',
      description: 'ipsum dolor sit amet.'
    },
    {
      category: 'type A',
      iconImage: 'react.png',
      name: 'Lorem Ipsum ',
      description: 'ipsum dolor sit amet.'
    },
    {
      category: 'type A',
      iconImage: 'react.png',
      name: 'Lorem Ipsum ',
      description: 'ipsum dolor sit amet.'
    },
    {
      category: 'type C',
      iconImage: 'react.png',
      name: 'Lorem Ipsum ',
      description: 'ipsum dolor sit amet.'
    }
  ]

  get groupedCertificates() {
    const groups = this.certificates.reduce((acc, cert) => {
      (acc[cert.category] = acc[cert.category] || []).push(cert);
      return acc;
    }, {} as Record<string, Certificate[]>);

    return Object.entries(groups); // Returns [ ['type A', [...]], ['type B', [...]], ... ]
  }
}
