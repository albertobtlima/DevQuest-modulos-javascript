const loadUser = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {id: 1, name: "John"},
        {id: 2, name: "Jane"},
      ]);
    }, 2000);
  });
};

const loadRepositories = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {id: 1, name: "Repo 1"},
        {id: 2, name: "Repo 2"},
      ]);
    }, 2000);
  });
};

const loadEvents = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Erro ao carregar os Eventos!"))
    }, 2000);
  });
};

/* const loadAll = async () => {
  try {
    const result = await Promise.all([
      loadUser(), 
      loadRepositories(), 
      loadEvents(),
    ]);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}; */

const loadAll = async () => {
  try {
    const result = await Promise.allSettled([
      loadUser(), 
      loadRepositories(), 
      loadEvents(),
    ]);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

loadAll();
