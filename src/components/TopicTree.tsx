import { ResponsiveTreeMap } from '@nivo/treemap'
import './TopicTree.css'

const groupedTopics = [
  {
    name: 'Development',
    children: [
      { name: 'Apps', loc: 24 },
      { name: 'Frontend', loc: 13 },
      { name: 'Validation', loc: 12 },
      { name: 'API', loc: 5 },
    ],
  },
  {
    name: 'DevOps',
    children: [
      { name: 'Automation', loc: 26 },
      { name: 'Docker', loc: 21 },
      { name: 'CI/CD', loc: 11 },
      { name: 'Testing', loc: 13 },
    ],
  },
  {
    name: 'Collaboration',
    children: [
      { name: 'Git', loc: 18 },
      { name: 'Documentation', loc: 5 },
    ],
  },
  {
    name: 'Others',
    children: [
      { name: 'Analytics', loc: 6 },
      { name: 'Personal', loc: 6 },
    ],
  },
]

const data = {
  name: 'topics',
  children: groupedTopics,
}

// Base teal color
const baseTeal = [6, 148, 148]

// Shade function for leaf nodes.
// Larger values produce darker shades.
const getShade = (value: number, min: number, max: number): string => {
  const t = (value - min) / (max - min || 1)
  const lighten = 1 - t * 0.5

  const [r, g, b] = baseTeal

  return `rgb(
    ${Math.round(r * lighten)},
    ${Math.round(g * lighten)},
    ${Math.round(b * lighten)}
  )`
}

// Precompute min/max values for each group
const groupMinMax: Record<string, { min: number; max: number }> = {}

groupedTopics.forEach((group) => {
  const values = group.children.map((child) => child.loc)

  groupMinMax[group.name] = {
    min: Math.min(...values),
    max: Math.max(...values),
  }
})

export default function TreeMap() {
  return (
    <div className="tree-map-wrapper">
      <h3 className="chart-title">Repositories by Topic</h3>

      <div className="tree-map">
        <ResponsiveTreeMap
          data={data as unknown as object}
          identity="name"
          value="loc"
          valueFormat=".0f"
          margin={{
            top: 10,
            right: 10,
            bottom: 10,
            left: 10,
          }}
          label={(node: { id: string }) => node.id}
          labelSkipSize={10}
          labelTextColor="#fff"
          theme={{
            labels: {
              text: {
                fontSize: 14,
                fontWeight: 600,
              },
            },
          }}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 0.3]],
          }}
          colors={(node: { parent?: { data: { name: string } }; value: number }) => {
            // Leaf node belonging to a top-level group
            if (
              node.parent &&
              node.parent.data.name !== 'topics'
            ) {
              const groupName = node.parent.data.name
              const minMax = groupMinMax[groupName]

              if (minMax) {
                return getShade(node.value, minMax.min, minMax.max)
              }
            }

            // Top-level group
            return `rgb(${baseTeal.join(',')})`
          }}
        />
      </div>
    </div>
  )
}
