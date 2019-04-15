export const signup = user =>
	$.ajax({
		method: 'POST',
		url: 'api/users',
		data: { user },
	});

export const login = user =>
	$.ajax({
		method: 'POST',
		url: 'api/session',
		data: { user },
	});

export const logout = () =>
	$.ajax({
		method: 'DELETE',
		url: 'api/session',
	});

export const updateUser = user =>
	$.ajax({
		method: 'PATCH',
		url: `api/users/${user.id}`,
		data: { user },
	});

export const fetchUser = username => {
	return $.ajax({
		method: 'GET',
		url: `api/users/${username}`,
	});
};

export const addFollow = follow => {
	return $.ajax({
		method: 'POST',
		url: 'api/follows',
		data: { follow },
	});
};

export const deleteFollow = id => {
	return $.ajax({
		method: 'DELETE',
		url: `api/follows/${id}`
	});
};