import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-card',
  templateUrl: './faq-card.component.html',
  styleUrls: ['./faq-card.component.scss'],
})
export class FAQCardComponent {
  openIndex: number | null = null;

  faqs = [
    {
      question: 'در این دوره چه می‌آموزیم؟',
      answer: 'لورم ایپسوم متن ساختگی ...',
    },
    {
      question: 'پیش نیازهای دوره چیست؟',
      answer: 'پیش نیازهای این دوره شامل ...',
    },
    {
      question: 'آیا شرایط اقساطی فعال می‌باشد؟',
      answer: 'بله، شرایط اقساطی برای برخی ...',
    },
    {
      question: 'برای ورود به حوزه کاری چه باید کرد؟',
      answer: 'مطالعه، تمرین و شرکت در دوره‌های تخصصی ...',
    },
  ];

  toggleAccordion(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
