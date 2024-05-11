const loadUser = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error(`GitHub API returned status code ${response.status}`);
  }

  const user = await response.json();

  return user;
};

const loadRepositories = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error(`GitHub API returned status code ${response.status}`);
  }

  const repositiries = await response.json();
  return repositiries.map((repo) => ({id: repo.id, name: repo.name}));
};

const loadEvents = async () => {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (!response.ok) {
    throw new Error(`GitHub API returned status code ${response.status}`);
  }

  const events = await response.json();
  return events.map((event) => ({id: event.id, name: event.type}));
};

/* const loadAll = async () => {
  try {
    const result = await Promise.all([
      loadUser("lucaoskaique"), 
      loadRepositories("lucaoskaique"), 
      loadEvents("lucaoskaique"),
    ]);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}; */

const loadAll = async () => {
  try {
    const result = await Promise.allSettled([
      loadUser("lucaoskaique"), 
      loadRepositories("lucaoskaique"), 
      loadEvents("lucaoskaique"),
    ]);

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

loadAll();
