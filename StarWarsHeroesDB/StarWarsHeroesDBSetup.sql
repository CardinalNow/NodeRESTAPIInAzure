CREATE TABLE [dbo].[Heroes](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Good] [bit] NOT NULL,
	[HasForce] [bit] NOT NULL
)

GO

CREATE PROCEDURE [dbo].[AllHeroes]
AS
BEGIN
	SET NOCOUNT ON;

	SELECT ID, Name, Good, HasForce FROM Heroes
END

GO

CREATE PROCEDURE [dbo].[HeroById]
	@heroId int
AS
BEGIN
	SET NOCOUNT ON;

	SELECT ID, Name, Good, HasForce FROM Heroes WHERE ID = @heroId
END


GO

CREATE PROCEDURE [dbo].[HeroesByIntent]
	@good bit
AS
BEGIN
	SET NOCOUNT ON;

	SELECT ID, Name, Good, HasForce FROM Heroes WHERE Good = @good
END

GO