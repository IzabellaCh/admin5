export const sendMessage = async (
  text: string,
  setSuccess: () => void,
  setError: () => void,
) => {
  try {
    const res = await fetch(
      `https://api.telegram.org/${process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID}&text=${text}`,
    );
    if (res.ok) {
      setSuccess();
      console.log(res);
    } else {
      throw new Error('Что-то пошло не так');
    }
  } catch (err: unknown) {
    setError();
    console.log(err);
  }
};
