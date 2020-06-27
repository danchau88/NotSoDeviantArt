json.array! @deviations do |deviation|

    json.partial! 'api/deviations/deviation', deviation: deviation

end