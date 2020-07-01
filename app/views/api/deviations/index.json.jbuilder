@deviations.each do |deviation|
    json.set! deviation.id do
        json.partial! 'api/deviations/deviation', deviation: deviation
    end
end