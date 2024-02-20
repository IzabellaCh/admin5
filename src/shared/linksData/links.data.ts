type TLinks = {
  whatsappMobile: string;
  whatsappWeb: string;
  vk: string;
  telegram: string;
  phoneNumber: string;
  email: string;
};

export const LINKS: TLinks = {
  whatsappMobile: `https://api.whatsapp.com/send/?text=Добрый день! Меня заинтересовали услуги admin5&phone=%2B${process.env.NEXT_PUBLIC_WHATSAPP_PHONE}`,
  whatsappWeb: `https://web.whatsapp.com/send/?text=Добрый день! Меня заинтересовали услуги admin5&phone=%2B${process.env.NEXT_PUBLIC_WHATSAPP_PHONE}`,
  vk: 'https://vk.com/it_v_spb',
  telegram: 'Чат будет добавлен позднее',
  phoneNumber: '78123392338',
  email: 'info@admin5.ru',
};

export const formatPhoneNumber = (phoneNumberString: string) => {
  const one = phoneNumberString.slice(1, 4);
  const two = phoneNumberString.slice(4, 7);
  const three = phoneNumberString.slice(7, 9);
  const four = phoneNumberString.slice(9, 11);

  return ['+7', '(', one, ') ', two, '-', three, '-', four].join('');
};
