const itActsAsFavoriteMovieModel = (service) => {
  it('should return the restaurant that has been added', async () => {
    service.set({ id: 1 })
    service.set({ id: 2 })

    expect(await service.get(1))
      .toEqual({ response: { id: 1 }, error: null })
    expect(await service.get(2))
      .toEqual({ response: { id: 2 }, error: null })
    expect(await service.get(3))
      .toEqual({ response: undefined, error: null })
  })

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    service.set({ aProperty: 'property' })

    expect(await service.getAll())
      .toEqual({ response: [], error: null })
  })

  it('can return all of the restaurants that have been added', async () => {
    service.set({ id: 1 })
    service.set({ id: 2 })

    expect(await service.getAll())
      .toEqual({
        response: [
          { id: 1 },
          { id: 2 }
        ],
        error: null
      })
  })

  it('should remove favorite restaurant', async () => {
    service.set({ id: 1 })
    service.set({ id: 2 })
    service.set({ id: 3 })

    await service.delete(1)

    expect(await service.getAll())
      .toEqual({
        response: [
          { id: 2 },
          { id: 3 }
        ],
        error: null
      })
  })

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    service.set({ id: 1 })
    service.set({ id: 2 })
    service.set({ id: 3 })

    await service.delete(4)

    expect(await service.getAll())
      .toEqual({
        response: [
          { id: 1 },
          { id: 2 },
          { id: 3 }
        ],
        error: null
      })
  })
}

export { itActsAsFavoriteMovieModel }
