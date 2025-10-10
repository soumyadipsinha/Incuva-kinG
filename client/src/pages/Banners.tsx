import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type Template = {
	id: string
	title: string
	thumbnailUrl: string
	category: string
	style: string
	size: string
}

const ALL_TEMPLATES: Template[] = [
	{
		id: "tmpl-1",
		title: "Yellow Cyber Monday Roll-up Banner",
		thumbnailUrl: "/assets/react.svg",
		category: "Retail",
		style: "Modern",
		size: "3x6 ft",
	},
	{
		id: "tmpl-2",
		title: "Open Mic Night Event Banner",
		thumbnailUrl: "/assets/vite.svg",
		category: "Events",
		style: "Bold",
		size: "4x6 ft",
	},
	{
		id: "tmpl-3",
		title: "Gaming Channel Profile Banner",
		thumbnailUrl: "/assets/react.svg",
		category: "Digital",
		style: "Tech",
		size: "16:9",
	},
	{
		id: "tmpl-4",
		title: "Real Estate Open House Banner",
		thumbnailUrl: "/assets/vite.svg",
		category: "Real Estate",
		style: "Clean",
		size: "3x6 ft",
	},
]

const categoryOptions = [
	{ label: "All categories", value: "" },
	{ label: "Retail", value: "Retail" },
	{ label: "Events", value: "Events" },
	{ label: "Digital", value: "Digital" },
	{ label: "Real Estate", value: "Real Estate" },
]

const sizeOptions = [
	{ label: "All sizes", value: "" },
	{ label: "3x6 ft", value: "3x6 ft" },
	{ label: "4x6 ft", value: "4x6 ft" },
	{ label: "16:9", value: "16:9" },
]

export default function BannersPage() {
	const [query, setQuery] = useState("")
	const [category, setCategory] = useState("")
	const [size, setSize] = useState("")

	const filtered = useMemo(() => {
		return ALL_TEMPLATES.filter((t) => {
			const matchesQuery = t.title.toLowerCase().includes(query.toLowerCase().trim())
			const matchesCategory = !category || t.category === category
			const matchesSize = !size || t.size === size
			return matchesQuery && matchesCategory && matchesSize
		})
	}, [query, category, size])

	return (
		<div className="mx-auto max-w-7xl px-4 py-8">
			<header className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
				<div>
					<h1 className="text-2xl font-semibold text-primary">Banner Templates</h1>
					<p className="text-sm text-muted-foreground">Browse and customize banners for events, retail, and more — inspired by offerings like Picsart and PosterMyWall.</p>
				</div>
				<div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
					<div className="md:w-64">
						<Input
							placeholder="Search templates..."
							value={query}
							onChange={(e) => setQuery(e.target.value)}
						/>
					</div>
					<div className="md:w-56">
						<Select value={category} onValueChange={(v) => setCategory(v)}>
							<SelectTrigger>
								<SelectValue placeholder="Category" />
							</SelectTrigger>
							<SelectContent>
								{categoryOptions.map((opt) => (
									<SelectItem key={opt.label} value={opt.value}>{opt.label}</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div className="md:w-40">
						<Select value={size} onValueChange={(v) => setSize(v)}>
							<SelectTrigger>
								<SelectValue placeholder="Size" />
							</SelectTrigger>
							<SelectContent>
								{sizeOptions.map((opt) => (
									<SelectItem key={opt.label} value={opt.value}>{opt.label}</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
				</div>
			</header>

			{/* Results summary */}
			<div className="mb-4 flex items-center justify-between">
				<p className="text-sm text-muted-foreground">
					Showing <span className="font-medium text-foreground">{filtered.length}</span> templates
				</p>
				<div className="hidden gap-2 md:flex">
					{category && <Badge variant="secondary">{category}</Badge>}
					{size && <Badge variant="secondary">{size}</Badge>}
					{(category || size || query) && (
						<Button variant="ghost" size="sm" onClick={() => { setQuery(""); setCategory(""); setSize("") }}>Clear</Button>
					)}
				</div>
			</div>

			{/* Grid */}
			<section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{filtered.map((t) => (
					<Card key={t.id} className="overflow-hidden">
						<div className="aspect-[4/3] w-full bg-muted">
							<img src={t.thumbnailUrl} alt={t.title} className="h-full w-full object-contain" />
						</div>
						<CardHeader>
							<CardTitle className="line-clamp-2 text-base">{t.title}</CardTitle>
						</CardHeader>
						<CardContent className="flex items-center gap-2 text-xs text-muted-foreground">
							<Badge variant="outline">{t.category}</Badge>
							<span>•</span>
							<span>{t.style}</span>
							<span>•</span>
							<span>{t.size}</span>
						</CardContent>
						<CardFooter className="justify-between">
							<Button size="sm">Customize</Button>
							<Button size="sm" variant="outline">Preview</Button>
						</CardFooter>
					</Card>
				))}
			</section>
		</div>
	)
}


