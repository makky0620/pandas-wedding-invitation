export const useSpreadsheet = <T>() => {
  const addRow = async (data: T) => {
    await fetch('/api/sheets', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  return {
    addRow,
  };
};
