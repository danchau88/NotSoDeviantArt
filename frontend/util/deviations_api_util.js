export const getAllDeviations = () => $.ajax({
    url: "/api/deviations"
});

export const getDeviation = deviationId => $.ajax({
    url: `/api/deviations/${deviationId}`
  });

export const postDeviation = deviation => $.ajax({
    url: "/api/deviations",
    method: "POST",
    data: {deviation}
});

export const patchDeviation = deviation => $.ajax({
    url: `/api/deviations/${deviation.id}`,
    method: "PATCH",
    data: {deviation}
});

export const deleteDeviation = deviationId => $.ajax({
    url: `/api/deviations/${deviationId}`,
    method: "DELETE"
});

export const searchDeviations = string => $.ajax({
    url: `/api/deviations?search=${string}`
})