json.deviations do  
  @deviations.each do |deviation|
    json.set! deviation.id do
        json.partial! 'api/deviations/deviation', deviation: deviation
    end
  end
end

json.users do 
  @deviations.each do |deviation|
    json.set! deviation.artist.id do
      json.partial! 'api/users/user', user: deviation.artist
    end
  end
end