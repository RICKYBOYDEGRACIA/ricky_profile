import { Component } from '@angular/core';
import { Gear } from '../../data/interfaces/common';

@Component({
  imports: [],
  selector: 'app-gears-page',
  styleUrl: './gears-page.css',
  templateUrl: './gears-page.html',
})
export class GearsPage {
  gears: Gear[] = [
      {
        name: 'Soundcore r50i',
        description: 'Headphones',
        imagePath: 'soundcore.webp',
        link: "https://service.soundcore.com/product-description/a085g00000GjIPnAAN",
        features: [
          'With 10mm drivers, Bluetooth 5.3, and IPX5 water resistance, the Soundcore R50i is an affordable true wireless earbud.  It supports fast charging (10 minutes for 2 hours of use) and provides 10 hours of playback per charge, which can be extended to 30 hours overall with the compact case. ',
          'Touch controls, AI-enhanced clear calls via dual microphones, and 22 preset EQ modes that can be accessed via the Soundcore app are some of the main features.  The ergonomic, lightweight earbuds come in a variety of colors and are made with comfort in mind. ',
          'The Soundcore R50i NC model offers multipoint connectivity for two devices, a 2-in-1 charging case that can also be used as a phone stand, and adaptive Active Noise Cancelation (ANC), which can reduce noise by up to 42dB. '
        ],
      },
      {
        name: 'Logitech M650',
        description: 'Mouse',
        imagePath: 'mouse.webp',
        link: "https://www.logitech.com/en-us/shop/p/m650-signature-wireless-mouse",
        features: [
          'Designed for small to medium-sized hands, the Logitech Signature M650 is a wireless productivity mouse with a contoured ergonomic shape, rubber side grips, and 90% less clicking noise thanks to SilentTouch technology.  Five programmable buttons, an adaptive SmartWheel for accurate or quick scrolling, and dual connectivity through a Logi Bolt USB receiver or Bluetooth Low Energy are all included.',
          'Sensor: Logitech Advanced Optical Tracking with a resolution of 400–4000 DPI.',
          'Battery Life: Up to 24 months on a single included AA battery.',
          'Compatibility: Works with Windows, macOS, Linux, Chrome OS, iPadOS, and Android.',
          'Software: Customizable via Logi Options+ for button remapping and DPI adjustment.'
        ]
      },
      {
        name: 'Rakk Kludge rk61',
        description: 'Keyboard',
        imagePath: 'keyboard.webp',
        link: "https://rkgamingstore.com/products/rk61-60-percent-keyboard",
        features: [
          'With hot-swappable switches that support both 3-pin and 5-pin mechanical switches without soldering, the RK61 60% Wireless Mechanical Keyboard is a small, 61-key layout board made for portability and first-person shooter gaming.  It ensures smooth switching between Windows, Mac, and Android devices with its triple-mode connectivity via Bluetooth 5.0/5.1 (pairing up to three devices), 2.4GHz wireless dongle, and USB-C wired connection.',
          'Important features include dimensions of about 11.5 x 4 inches, a lightweight 0.5 kg frame, and a 1450mAh rechargeable battery that can be used for about 10 hours.  Depending on the edition, the keyboard has sturdy PBT or ABS keycaps and comes in a variety of configurations, such as full RGB lighting or a single-color blue backlighting.  In addition to on-board memory for profile storage, RK`s expert software for key remapping, macro recording, and lighting effects supports customization.'
        ]
      },
      {
        name: 'Lenovo IdeaPad 3 Slim 3',
        description: 'Laptop',
        imagePath: 'laptop.webp',
        link: "https://www.lenovo.com/us/en/p/laptops/ideapad/ideapad-300/ideapad-3-gen-5-15-inch-intel/len101i0006",
        features: [
          'Display Options: Available with HD (1366x768) TN panels or Full HD (1920x1080) IPS panels, with many models offering touchscreen functionality and anti-glare coatings.',
          'Performance: Core processors range from the Intel Core i3-1005G1/1115G4 for basic tasks to the i5-1135G7/1235U for better multitasking and light creative work. ',
          'Ports and Connectivity: Standard connectivity includes USB-A 3.2, HDMI 1.4b/2.0, a 3.5mm audio jack, and an SD card reader, with newer models supporting Wi-Fi 6 and Bluetooth 5.0+.',
          'Battery and Build: Typically equipped with a 35Wh to 45Wh battery offering up to 5.5 to 8.5 hours of use, housed in a PC + ABS plastic chassis weighing approximately 3.6 to 4.8 pounds. ',
          'Software: Ships with Windows 10 or Windows 11 Home (sometimes in S Mode) and includes a physical webcam shutter for privacy security. '
        ]
      },
      {
        name: 'Benq Monitor GW2283 ISP Led',
        description: 'Monitor',
        imagePath: 'monitor.jpg',
        link: "https://www.benq.com/en-us/monitor/home/gw2283.html",
        features: [
          'Beautifully complements any modern décor. Spectacular edge-to-edge panel with ultra slim bezels and elegant profile.',
          'Resists fine scratch whirling with a luxurious touch',
          'Hides all wires inside the monitor stand for the cleanest look.',
          'With an expansive 178° viewing angle, IPS (In-Plane Switching) Technology provides accurate color and image reproduction from any angle.',
          'Renders 16.7 million color shades simultaneously so you can expect true colors, silky transitions and impeccable image quality.',
        ]
      }
    ]
}
